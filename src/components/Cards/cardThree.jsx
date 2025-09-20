// 1. IMPORT useState, useEffect, and useRef from React
import React, { useState, useEffect, useRef } from 'react';
import styles from './cardThree.module.css';

// 2. USE PASCALCASE for component names (CardThree)
export default function CardThree() {

    // 3. ALL STATE and REF variables are now declared
    const [messages, setMessages] = useState([
        { author: 'bot', text: "Hi! I'm Fredrick. Ask me about Brittany's projects." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Effect for auto-scrolling
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 4. TYPO FIX: Changed 'InputDeviceInfo' to 'input'
        if (!input.trim() || isLoading) return;

        const userMessage = { author: 'user', text: input };
        
        // 5. TYPO FIX: Changed 'setMessage' to 'setMessages' to match state declaration
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Ensure your backend is running on port 3500
            const response = await fetch('http://localhost:3500/api/fredrick', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            if (!response.ok) {
                // Better error handling
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();

            const botMessage = { author: 'bot', text: data.reply };
            setMessages(prev => [...prev, botMessage]);

        } catch (err) {
            console.error("Error generating response from Gemini.", err);
            // Display an error in the chat for a better user experience
            const errorMessage = { author: 'bot', text: "Sorry, I'm having a little trouble thinking right now." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            // 6. TYPO FIX: Changed 'setIsLOading' to 'setIsLoading' (lowercase 'l')
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.fredrickCard}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>AI Sir.Fredrick</h2>
                <p className={styles.subtitle}>Ask me about, Brittany, her services or chat!</p>
            </div>
            <div className={styles.chatWindow}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles[msg.author === 'bot' ? 'botMessage' : 'userMessage']}>
                        {msg.text}
                    </div>
                ))}
                {isLoading && <div className={styles.botMessage}><em>Thinking...</em></div>}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className={styles.chatForm}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className={styles.chatInput}
                    disabled={isLoading}
                />
                <button type="submit" className={styles.sendButton} disabled={isLoading}>
                    Send
                </button>
            </form>
        </div>
    );
}