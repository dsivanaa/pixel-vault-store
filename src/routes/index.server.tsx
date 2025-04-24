export default function HomePage() {
  const products = [
    { id: 1, title: 'Planner 2025', description: 'Organize sua vida com este planner digital em PDF.', price: 'CHF 7.90' },
    { id: 2, title: 'Kit de Branding Minimalista', description: 'Arquivos Canva com logotipo, paleta de cores e fontes.', price: 'CHF 12.00' },
    { id: 3, title: 'Template de Currículo Moderno', description: 'Modelo editável em Word e PDF para destacar sua carreira.', price: 'CHF 5.50' },
  ];
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Pixel Vault</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Acesso instantâneo a produtos digitais profissionais
      </p>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem', background: '#fafafa' }}>
            <h2 style={{ fontSize: '1.2rem' }}>{product.title}</h2>
            <p style={{ margin: '0.5rem 0' }}>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
