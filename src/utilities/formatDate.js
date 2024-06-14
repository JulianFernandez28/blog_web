// utils.js
export function formatDate(dateString) {
    return new Date(dateString).toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  }
  