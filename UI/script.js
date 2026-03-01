document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updateUI = () => {
        const count = document.getElementById('cart-count');
        if (count) count.textContent = cart.length;
        if (window.lucide) lucide.createIcons();
    };
    updateUI();
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = '<div class="loader"></div>';
            setTimeout(() => {
                if (Math.random() < 0.1) return btn.textContent = 'Slut! ❌';
                cart.push({ name: btn.dataset.name, price: +btn.dataset.price });
                localStorage.setItem('cart', JSON.stringify(cart));
                updateUI();
                btn.textContent = 'Tillagd! ✔';
                setTimeout(() => btn.innerHTML = 'Lägg i varukorg', 1500);
            }, 600);
        });
    });
    const renderCart = () => {
        const list = document.getElementById('cart-items-list');
        if (!list) return;
        let sum = 0;
        list.innerHTML = '';
        cart.forEach((item, i) => {
        sum += item.price;
        list.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">
                <span>${item.name}</span><span>${item.price} kr <button onclick="rm(${i})" style="color:red; background:none; border:none; cursor:pointer;">X</button></span></div>`;
    });
        const frakt = document.getElementById('delivery')?.value === 'Express' ? 99 : 0;
        document.getElementById('cart-total-price').textContent = sum + frakt;
    };
    window.rm = (i) => {
        cart.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateUI();
    };
    document.getElementById('delivery')?.addEventListener('change', renderCart);
    renderCart();
    document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Köp genomfört!');
        localStorage.clear();
        window.location.href = 'index.html';
    });
});