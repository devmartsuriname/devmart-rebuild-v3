export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  image: string;
  category: string;
  tags: string[];
  comments: number;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top IT Trends in 2025. What Businesses Need to Know',
    slug: 'top-it-trends-2025',
    excerpt: 'Discover the latest IT trends that are shaping the future of business technology.',
    content: 'Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: {
      name: 'Admin',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-1.jpg'
    },
    date: '12 Nov',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-1.jpg',
    category: 'Technology',
    tags: ['Technology', 'IT'],
    comments: 5,
    readTime: '4 Min Read'
  },
  {
    id: '2',
    title: 'Adapting to Digital Marketing Trends: Staying Ahead',
    slug: 'digital-marketing-trends',
    excerpt: 'Learn how to stay ahead in the ever-evolving digital marketing landscape.',
    content: 'Digital marketing continues to evolve rapidly with new technologies and platforms.',
    author: {
      name: 'Admin',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-2.jpg'
    },
    date: '18 Mar',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-2.jpg',
    category: 'Marketing',
    tags: ['Marketing', 'Digital'],
    comments: 8,
    readTime: '5 Min Read'
  },
  {
    id: '3',
    title: 'Standing Out in a Competitive Market',
    slug: 'competitive-market-strategies',
    excerpt: 'Strategies to help your business stand out from the competition.',
    content: 'In today competitive business environment, differentiation is key to success.',
    author: {
      name: 'Admin',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-3.jpg'
    },
    date: '18 Apr',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-3.jpg',
    category: 'Business',
    tags: ['Business', 'Strategy'],
    comments: 12,
    readTime: '6 Min Read'
  }
];
