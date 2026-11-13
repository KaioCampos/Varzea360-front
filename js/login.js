// js/login.js

// 1. Lógica para alternar a seleção do Perfil de Acesso
const profileCards = document.querySelectorAll('.profile-card');

profileCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe 'active' de todos os cartões
        profileCards.forEach(c => c.classList.remove('active'));
        // Adiciona a classe 'active' apenas no cartão clicado
        card.classList.add('active');
    });
});

// 2. Lógica para mostrar/esconder a senha
const togglePasswordBtn = document.getElementById('toggle-password');
const passwordInput = document.getElementById('senha');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
        // Alterna o tipo do input entre 'password' e 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Altera o ícone do botão
        togglePasswordBtn.textContent = type === 'password' ? '👁️' : '🙈';
    });
}

// 3. Simulação de envio do formulário de login (por enquanto, redireciona para a tela principal)
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Descobre qual perfil está selecionado no momento
        const activeProfile = document.querySelector('.profile-card.active').dataset.profile;
        const email = document.getElementById('email').value;
        
        console.log(`Login efetuado com o e-mail: ${email} no perfil: ${activeProfile}`);
        
        // Redireciona para a tela de consulta de clubes (que faremos a seguir)
        alert(`Login bem-sucedido como ${activeProfile.toUpperCase()}! Redirecionando para o painel...`);
        
        // Futuramente aqui chamaremos a API do Back-end no IntelliJ!
        // window.location.href = 'dashboard.html'; 
    });
}