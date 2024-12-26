// Calcula o total com ou sem desconto
document.getElementById('calcularBtn').addEventListener('click', function () {
    let total = 0

    // Obtém todos os checkboxes marcados
    const materiaisSelecionados = document.querySelectorAll('input[name="material"]:checked');

    // Soma os valores dos itens marcados
    materiaisSelecionados.forEach(function (item) {
        total += parseFloat(item.value)
    });

    // Obtém o cupom
    const cupom = document.getElementById('cupom').value.trim()
    let desconto = 0

    // Verifica se o cupom é válido
    if (cupom === "MATERIAL10") {
        desconto = total * 0.1 // 10% de desconto
    }

    const totalComDesconto = total - desconto

    // Atualiza os resultados na tela
    document.getElementById('resultado').innerText = `Total: R$ ${totalComDesconto.toFixed(2)}`
    document.getElementById('desconto').innerText = `Desconto: R$ ${desconto.toFixed(2)}`
});

// Limpa o total, desconto e desmarca os checkboxes
document.getElementById('limparBtn').addEventListener('click', function () {
    // Reseta os resultados
    document.getElementById('resultado').innerText = 'Total: R$ 0,00'
    document.getElementById('desconto').innerText = 'Desconto: R$ 0,00'

    // Limpa o campo do cupom
    document.getElementById('cupom').value = ''

    // Desmarca todos os checkboxes
    const checkboxes = document.querySelectorAll('input[name="material"]')
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false
    });
});