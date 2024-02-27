import React, { useEffect } from 'react';
import testDBConnection from './db';

function TestConnectionComponent() {
    useEffect(() => {
        async function testConnection() {
            const result = await testDBConnection();
            console.log('Connection test result:', result);
        }
        testConnection();
    }, []);

    return (
        <div>
            {/* Vous pouvez afficher un message ou un indicateur de chargement ici */}
        </div>
    );
}

export default TestConnectionComponent;
