const CLIENT_ID = '940abda4718c4764adcdf5cb26af39ea';
const CLIENT_SECRET = '6f5fd81dcde046ff81b7ef2a9c27c6a2';

async function obtenerInfoArtista() {
    const idArtista = document.getElementById('idArtista').value;
    const accessToken = await obtenerTokenAcceso();

    if (accessToken) {
        const apiUrl = `https://api.spotify.com/v1/artists/${idArtista}`;
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const datosArtista = await response.json();
            mostrarInfoArtista(datosArtista);
        } else {
            console.error('Error al obtener información del artista');
        }
    }
}

async function obtenerTokenAcceso() {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
        },
        body: 'grant_type=client_credentials'
    });

    if (response.ok) {
        const data = await response.json();
        return data.access_token;
    } else {
        console.error('Error al obtener el token de acceso');
        return null;
    }
}

function mostrarInfoArtista(datosArtista) {
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = `
        <h2>${datosArtista.name}</h2>
        <img src="${datosArtista.images[0].url}" alt="${datosArtista.name}" class="img-fluid mb-3">
        <p>Géneros: ${datosArtista.genres.join(', ')}</p>
        <p>Popularidad: ${datosArtista.popularity}</p>
        <p>Seguidores: ${datosArtista.followers.total}</p>
        <p>Enlace: <a href="${datosArtista.external_urls.spotify}" target="_blank">Abrir en Spotify</a></p>
    `;
}
