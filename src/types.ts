export interface Post {
  id: string;
  content: string;
  image?: string;
  likes: number;
  profile: User;
}

export interface User {
  id: string;
  name: string;
  position: string;
  image?: string;
  backimage?: string;
  about?: string;
  experience?: Experience[];
}

export interface Experience {
  id: string;
  title: string;
  companyname: string;
  companyimage?: string;
}
