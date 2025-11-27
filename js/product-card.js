class ProductCard extends HTMLElement {
  connectedCallback() {
    const manualSlotContent = this.innerHTML;

    const variant = this.getAttribute('variant') || '';
    const customClass = this.getAttribute('class') || '';

    const variantClass = variant ? `product-card--variant-${variant}` : '';
    const cssClasses = `product-card ${customClass} ${variantClass}`.trim();

    this.innerHTML = `
      <article class="${cssClasses}">
        ${manualSlotContent}
      </article>
    `;
    
    this.style.display = 'contents';
  }
}

customElements.define('c-product-card', ProductCard);

