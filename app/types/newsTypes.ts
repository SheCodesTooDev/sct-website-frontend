export interface Article {
  id: number;
  title: string;
  description: {
    type: 'paragraph';
    children: {
      type: 'text';
      text: string;
    }[];
  }[];
  date: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  photo: {
    data: {
      id: number;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        large?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}
[];
