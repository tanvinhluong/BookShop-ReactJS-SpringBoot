export const navigationData = {
  categories: [
    {
      id: "tools",
      name: "Dụng cụ học tập",
      featured: [
        {
          name: "Bút mới về",
          href: "/product/109",
          imageSrc: "https://cdn.fast.vn/tmp/20200703154747-19.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Bút bi Thiên Long",
          href: "/product/112",
          imageSrc: "https://cdn.fast.vn/tmp/20200703154729-20.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "study",
          name: "Đồ dùng học tập",
          items: [
            {
              name: "Bút bi",
              id: "pen",
              href: `{tools/study/pen}`,
            },
            {
              name: "Băng keo",
              id: "tape",
              href: `{tools/study/tape}`,
            },
            {
              name: "Máy tính Casio",
              id: "calculator",
              href: `{tools/study/calculator}`,
            },
            {
              name: "Thiết bị văn phòng",
              id: "office_device",
              href: `{tools/study/office_device}`,
            },
            {
              name: "Sách vở",
              id: "book",
              href: `{tools/study/book}`,
            },
            {
              name: "Kéo",
              id: "scissors",
              href: `{tools/study/scissors}`,
            },
            {
              name: "Sổ tay",
              id: "handbook",
              href: `{tools/study/handbook}`,
            },
            {
              name: "Giấy in",
              id: "paper",
              href: `{tools/study/paper}`,
            },
          ],
        },
        {
          id: "accessories",
          name: "Phụ kiện",
          items: [
            { name: "Đồng hồ siêu nhân", id: "watch" },
            { name: "Ví siêu nhân", id: "wallet" },
            { name: "Balo siêu nhân", id: "bag" },
            { name: "Kính đen", id: "sunglasse" },
            { name: "Mũ siêu nhân", id: "hat" },
            { name: "Chuông doraemon", id: "belt" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Thiên Long", id: "Thien_Long" },
            { name: "Tuổi trẻ", id: "Tuoi_Tre" },
            { name: "Nụ cười", id: "Nu_Cuoi" },
            { name: "Double A", id: "DoubleA" },
            { name: "Casio", id: "Casio" },
          ],
        },
      ],
    },
    // {
    //   id: "men",
    //   name: "Men",
    //   featured: [
    //     {
    //       name: "New Arrivals",
    //       id: "#",
    //       imageSrc:
    //         "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
    //       imageAlt:
    //         "Drawstring top with elastic loop closure and textured interior padding.",
    //     },
    //     {
    //       name: "Artwork Tees",
    //       id: "#",
    //       imageSrc:
    //         "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
    //       imageAlt:
    //         "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: "clothing",
    //       name: "clothing",
    //       items: [
    //         {
    //           name: "Mens kurta",
    //           id: "mens_kurta",
    //           href: `{men/clothing/mens_kurta}`,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [{ name: "Company", id: "company", href: "/about" }],
};
