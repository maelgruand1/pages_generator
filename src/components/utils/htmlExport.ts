export function htmlExporter(title: string, content: string): string {
    // Structure basique du HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f4f4f9;
            }
            h1 {
              color: #333;
            }
            p {
              color: #555;
            }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p>${content}</p>
        </body>
      </html>
    `;
  
    return htmlContent;
  }
  
  export function downloadHTML(title: string, content: string) {
    const html = htmlExporter(title, content);
  
    // Créer un Blob à partir du HTML
    const blob = new Blob([html], { type: 'text/html' });
  
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.html`; // Le nom du fichier sera basé sur le titre
    link.click(); // Déclenche le téléchargement
  }
  