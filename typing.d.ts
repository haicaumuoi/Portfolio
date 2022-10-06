interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Social extends SanityBody {
  _type: 'socials';
  title: string;
  url: string;
}

export interface Technologies extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}
export interface Skills extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}
export interface Skill extends SanityBody {
  _type: 'skills';
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: 'projects';
  linkToBuild: string;
  name: string;
  summary: string;
  image: Image;
  technologies: Technologies[];
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInfomation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  socials: Social[];
}
