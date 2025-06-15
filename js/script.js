// Exibe um alerta ao enviar o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado pelo contato! Sua mensagem foi enviada.");
});