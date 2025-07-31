$(function(){

    abrirJanela();
    cliqueFecharJanela();
    validarFormulario();

    function abrirJanela(){
        $('.botaoEnviar input[type=submit]').click(function(e){
            e.stopPropagation();
            $('#novaJanela').fadeIn();
        });
    }

    function cliqueFecharJanela(){
        $('body, #botaofechar').click(function(){
            $('#novaJanela').fadeOut();
            $('#meuFormulario input').removeClass('erro-input');
            $('#mensagemErro').text('');
        });

     

        $('.form').click(function(e){
            e.stopPropagation();
        })

    }

    //Função para validação dos campos
    function validarFormulario(){
        $('#meuFormulario').submit(function(e){
            e.preventDefault();

            let nome = $('input[name="nome"]');
            let email = $('input[name="email"]');
            let telefone = $('input[name="telefone"]');
            let mensagemErroDiv = $('#mensagemErro');
            let isValid = true;
            let erros = [];

            $('input').removeClass('erro-input');
            mensagemErroDiv.text('');

            //Validação nome completo
            const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{3,}$/;
            if(!regexNome.test(nome.val())){
                isValid = false;
                nome.addClass('erro-input');
                erros.push('Nome completo inválido (mínimo 3 caracteres, apenas letras e espaços).');
            }

            //Validação Email
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!regexEmail.test(email.val())){
                isValid = false;
                email.addClass('erro-input');
                erros.push('E-mail inválido (ex: seuemail@dominio.com).')
            }

            //Validação telefone fixo ou celular 
            const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
            if(!regexTelefone.test(telefone.val())){
                isValid = false;
                telefone.addClass('erro-input');
                erros.push('Telefone inválido (ex: (00)99999-9999 ou (00)9999-9999).');
            }

            if (!isValid){
                mensagemErroDiv.text('Por favor, corrija os seguintes campos: ' + erros.join(' '));
            }
            else{
                alert('Formulário validado com sucesso!');
                $('#novaJanela').fadeOut();
                $('#meuFormulario')[0].reset(); // Campos do formulários serão limpos
            }
        });
    }
});