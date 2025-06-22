console.log(teste);
<script>
    const form = document.getElementById('recoveryForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value.trim();

      if (email) {
        message.textContent = 'Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha.';
        message.className = 'message success';
      } else {
        message.textContent = 'Por favor, preencha o e-mail corretamente.';
        message.className = 'message error';
      }
     </script>