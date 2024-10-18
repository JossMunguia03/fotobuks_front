document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de datos
    const data = [
        { nombre: 'Juan', apellidos: 'Pérez', telefono: '555-1234', evento: 'Boda' },
        { nombre: 'María', apellidos: 'González', telefono: '555-5678', evento: 'Cumpleaños' },
        { nombre: 'Carlos', apellidos: 'Rodríguez', telefono: '555-8765', evento: 'Concierto' },
    ];

    const tableBody = document.getElementById('table-body');

    
    data.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4">${person.nombre}</td>
            <td class="px-6 py-4">${person.apellidos}</td>
            <td class="px-6 py-4">${person.telefono}</td>
            <td class="px-6 py-4">${person.evento}</td>
        `;
        tableBody.appendChild(row);
    });
});
