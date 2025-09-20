// Import useState and useEffect from React at the top
import React, { useState, useEffect } from 'react';
import styles from '../Cards/cardTwo.module.css';

export default function CardTwo() {
    // 1. Set up state variables to hold data, loading status, and errors
    const [dictionary, setDictionary] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTerm, setActiveTerm] = useState(null); // State for the accordion

    // 2. useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const apiUrl = 'https://api.github.com/repos/Brittany-Potato/Ultimate-JS-cheatsheets/contents/cheatsheets-here';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }
                return response.json();
            })
            .then(files => {
                const jsFiles = files.filter(file => file.name.endsWith('.js'));
                const fetchPromises = jsFiles.map(file => {
                    return fetch(file.download_url)
                        .then(res => res.text())
                        .then(content => {
                            const term = file.name.replace('.js', '');
                            return { term, content };
                        });
                });
                return Promise.all(fetchPromises);
            })
            .then(termsAndContent => {
                const dictionaryObject = termsAndContent.reduce((acc, { term, content }) => {
                    acc[term] = content;
                    return acc;
                }, {});
                setDictionary(dictionaryObject);
            })
            .catch(err => {
                console.error('Failed to load dictionary:', err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleTermClick = (term) => {
        setActiveTerm(activeTerm === term ? null : term);
    };

    // 3. Render content based on the current state
    const renderContent = () => {
        if (isLoading) {
            return <p>Loading dictionary from GitHub...</p>;
        }
        if (error) {
            return <p>Sorry, the dictionary could not be loaded: {error}</p>;
        }
        const sortedTerms = Object.keys(dictionary).sort();

        return (
            <dl>
                {sortedTerms.map(term => (
                    <React.Fragment key={term}>
                        {/* CHANGE #1: Added the onClick handler to the term */}
                        <dt onClick={() => handleTermClick(term)}>
                            {term}
                        </dt>
                        
                        {/* CHANGE #2: Conditionally render the code block */}
                        {activeTerm === term && (
                            <dd>
                                <pre><code>{dictionary[term]}</code></pre>
                            </dd>
                        )}
                    </React.Fragment>
                ))}
            </dl>
        );
    };

    return (
        <div className={styles.jsDictionary}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>Javascript Dictionary</h2>
            </div>
            <div className={`card-content ${styles.githubContainer}`}>
                {renderContent()}
            </div>
        </div>
    );
}