export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  fullDescription: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: 'icon-ux-design',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-1.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Create intuitive and engaging user experiences that drive customer satisfaction and business growth.'
  },
  {
    id: '2',
    title: 'Web Development',
    slug: 'web-development',
    icon: 'icon-code',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-4.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Build robust, scalable web applications with cutting-edge technologies and best practices.'
  },
  {
    id: '3',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: 'icon-social-media-marketing',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-6.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Boost your online presence with data-driven marketing strategies that deliver results.'
  },
  {
    id: '4',
    title: 'Business Analysis',
    slug: 'business-analysis',
    icon: 'icon-promotion-1',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-5.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Transform your business with strategic insights and data-driven decision making.'
  },
  {
    id: '5',
    title: 'Software Development',
    slug: 'software-development',
    icon: 'icon-software-development',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-2.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Develop custom software solutions tailored to your unique business needs.'
  },
  {
    id: '6',
    title: 'Product Design',
    slug: 'product-design',
    icon: 'icon-product-design',
    image: '/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-3.jpg',
    description: 'Comprehensive IT management, including network monitoring, data backup,',
    fullDescription: 'Design innovative products that solve real problems and delight users.'
  }
];
