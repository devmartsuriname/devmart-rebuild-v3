export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  comments: number;
  author: {
    name: string;
    image: string;
  };
  image: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Improving Business Growth with New Technology',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap. Holisticly leverage existing magnetic. Next-Gen Digital Transformation',
    date: 'April 5, 2025',
    comments: 80,
    author: {
      name: 'Malaika alise',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-1.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-1.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'improving-business-growth'
  },
  {
    id: '2',
    title: 'Regional Manager & limited management.',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap.',
    date: 'April 5, 2025',
    comments: 80,
    author: {
      name: 'Readik males',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-2.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-2.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'regional-manager-limited-management'
  },
  {
    id: '3',
    title: 'Easy and Most Powerful Server and Platform.',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap.',
    date: 'April 5, 2025',
    comments: 80,
    author: {
      name: 'Tamu Tanu',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-3.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-3.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'powerful-server-platform'
  },
  {
    id: '4',
    title: 'Improving Business Growth with New Technology',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap.',
    date: 'Aug 9, 2025',
    comments: 80,
    author: {
      name: 'Hardik Pandey',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-4.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-4.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'business-growth-technology'
  },
  {
    id: '5',
    title: 'The Role of AI in IT Support and Security',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap.',
    date: 'may 14, 2025',
    comments: 80,
    author: {
      name: 'Ronalfi Kenis',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-5.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-5.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'ai-it-support-security'
  },
  {
    id: '6',
    title: 'Advanced Cloud Computing Solutions',
    excerpt: 'Winning the Digital business The 2025 Transformation Roadmap.',
    date: 'Janu 15, 2025',
    comments: 80,
    author: {
      name: 'Tapila Gos',
      image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-6.jpg'
    },
    image: '/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-2-6.jpg',
    tags: ['Digital', 'Technology'],
    slug: 'cloud-computing-solutions'
  }
];
