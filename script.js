$(document).ready(function() {
  // Mensagem de boas-vindas
  alert("Bem vindo(a) ao meu site!");

  // Função voltar ao topo
  window.voltarAoTopo = function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  // Formulário de contato
  const $form = $('#form-contato');
  if ($form.length) {
    $form.on('submit', function(e) {
      e.preventDefault(); // evita o reload da página
      $('#resposta').text('Mensagem enviada com sucesso!');
      $form[0].reset(); // reseta os campos do formulário
    });
  }
});