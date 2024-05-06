export const navigationData = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'clothing',
          items: [
            {
              name: 'Tops',
              id: 'women_top',
              href: `{women/clothing/women_tops}`,
            },
            {
              name: 'Dresses',
              id: 'women_dress',
              href: `{women/clothing/women_dress}`,
            },
            {
              name: 'Women Jeans',
              id: 'women_jeans',
              href: `{women/clothing/women_jeans}`,
            },
            {
              name: 'Shirts',
              id: 'women_shirt',
              href: `{women/clothing/women_shirt}`,
            },
            {
              name: 'Lengha Choli',
              id: 'lengha_choli',
              href: `{women/clothing/lengha_choli}`,
            },
            {
              name: 'Sweaters',
              id: 'women_sweater',
              href: `{women/clothing/women_sweater}`,
            },
            {
              name: 'T-Shirts',
              id: 't-shirt',
              href: `{women/clothing/women_tshirt}`,
            },
            {
              name: 'Gouns',
              id: 'gouns',
              href: `{women/clothing/women_gouns}`,
            },
            { name: 'Sarees', id: 'saree', href: `{women/clothing/saree}` },
            {
              name: 'Women Kurtas',
              id: 'kurtas',
              href: `{women/clothing/women_kurta}`,
            },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch' },
            { name: 'Wallets', id: 'wallet' },
            { name: 'Bags', id: 'bag' },
            { name: 'Sunglasses', id: 'sunglasse' },
            { name: 'Hats', id: 'hat' },
            { name: 'Belts', id: 'belt' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: 'Full Nelson' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'clothing',
          items: [
            {
              name: 'Blazers',
              id: 'men_blazer',
              href: `{men/clothing/men_blazer}`,
            },
            {
              name: 'Suits',
              id: 'mens_suits',
              href: `{men/clothing/mens_suits}`,
            },
            {
              name: 'Shirts',
              id: 'mens_shirt',
              href: `{men/clothing/mens_shirt}`,
            },
            {
              name: 'Jeans',
              id: 'mens_jeans',
              href: `{men/clothing/mens_jeans}`,
            },
            {
              name: 'Track Pants',
              id: 'mens_track_pants',
              href: `{men/clothing/mens_track_pants}`,
            },
            {
              name: 'Cargos',
              id: 'mens_cargo',
              href: `{men/clothing/mens_cargo}`,
            },
            {
              name: 'Sweaters',
              id: 'mens_sweaters',
              href: `{men/clothing/mens_sweaters}`,
            },
            {
              name: 'T-Shirts',
              id: 'mens_tshirts',
              href: `{men/clothing/mens_tshirts}`,
            },
            {
              name: 'Traditionals',
              id: 'mens_traditionals',
              href: `{men/clothing/mens_traditionals}`,
            },
            {
              name: 'Mens kurta',
              id: 'mens_kurta',
              href: `{men/clothing/mens_kurta}`,
            },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#' },
            { name: 'Wallets', id: '#' },
            { name: 'Bags', id: '#' },
            { name: 'Sunglasses', id: '#' },
            { name: 'Hats', id: '#' },
            { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/' },
    { name: 'Stores', id: '/' },
  ],
}
