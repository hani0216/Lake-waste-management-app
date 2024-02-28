async function postData() {
    const url = 'http://localhost:3005/users';
    const data = {
      name: 'Ahmmdl,ved',
      email: 'ahdvml,med@example.com',
      address: '123 Ruedmlv de la République',
      phoneNumber: '+33 355664 56 78'
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Réponse du serveur:', responseData);
      } else {
        console.error('Erreur lors de la requête POST:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST:', error);
    }
  }
  
  // Appelez la fonction postData pour envoyer la requête POST
  postData();
  