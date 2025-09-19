import React, { useState, useEffect } from "react";
import styles from "./second-container.module.css";
import ReactMarkdown from 'react-markdown';

export default function SecondContainer() {
  // State for both profile data and README content
  const [profile, setProfile] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  
  // Unified loading and error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGitHubProfile() {
      const username = 'Brittany-Potato';
      
      try {
        // Fetch both the user profile data AND the README data in parallel
        const [profileResponse, readmeResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/repos/${username}/${username}/readme`)
        ]);

        if (!profileResponse.ok) throw new Error('Failed to fetch GitHub profile.');
        if (!readmeResponse.ok) throw new Error('Failed to fetch GitHub README.');

        const profileData = await profileResponse.json();
        const readmeData = await readmeResponse.json();
        
        // Decode the README content from Base64
        const decodedReadme = b64_to_utf8(readmeData.content);

        // Update state with both pieces of data
        setProfile(profileData);
        setReadmeContent(decodedReadme);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProfile();
  }, []); // Empty array ensures this runs only once on mount

  function b64_to_utf8(str) {
    try {
      const decoded = decodeURIComponent(
        atob(str).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
      );
      return decoded;
    } catch (e) {
      console.error("Failed to decode Base64 string", e.message);
      return atob(str);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsDiv}>
        <div className={styles.cardOne}>
          <div className={styles.cardOneInsdeDiv}>
            {loading && <p>Loading GitHub Profile...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && profile && (
              // This is the main "window" container
              <div className={styles.githubContentContainer}>
                
                {/* --- Profile Header Section --- */}
                <div className={styles.profileHeader}>
                  <img 
                    src={profile.avatar_url} 
                    alt="GitHub Avatar" 
                    className={styles.profileAvatar} 
                  />
                  <div className={styles.profileInfo}>
                    <h1 className={styles.profileName}>{profile.name}</h1>
                    <p className={styles.profileLogin}>@{profile.login}</p>
                    <p className={styles.profileBio}>{profile.bio}</p>
                  </div>
                </div>

                <hr className={styles.divider} />

                {/* --- README Section --- */}
                <div className={styles.readmeContainer}>
                  <ReactMarkdown>{readmeContent}</ReactMarkdown>
                </div>

              </div>
            )}
          </div>
        </div>
        <div className={styles.cardTwo}></div>
        <div className={styles.introCard}>
          {/* Your other content can go here, or you can remove this card */}
        </div>
      </div>
    </div>
  );
}