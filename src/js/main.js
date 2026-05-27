/**
 * Arquivo principal de JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('CZN Project Inicializado com Sucesso!');

    // Lógica das Tabs (Locais de Treino)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked button
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Show corresponding content
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Lógica das FAQs (Acordeão)
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const content = button.nextElementSibling;

            // Fechar todas as outras abertas
            accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    btn.nextElementSibling.style.maxHeight = null;
                    btn.nextElementSibling.style.opacity = '0';
                }
            });

            // Alternar a clicada
            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
                content.style.opacity = '0';
            } else {
                button.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = '1';
            }
        });
    });
});
