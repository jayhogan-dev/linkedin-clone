export interface Post {
  id: string;
  content: string;
  image?: string;
  likes: number;
  author: User;
}

export interface User {
  id: string;
  name: string;
  position: string;
  image?: string;
}
