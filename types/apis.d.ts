import { UserGender } from "@/enums";
export declare namespace User {
  interface Data {
    phone: number;
    password: string;
  }
  interface Info {
    id: number;
    userName: string;
    avatar: string;
    phone: string;
    gender: UserGender;
  }
}

export declare namespace Article {
  interface Query {
    page?: number;
    limit?: number;
    q?: string;
  }
  interface Body {
    title: string;
    content: string;
    subjectId: number;
    coverImage?: string;
    labelIds?: number[];
  }
  interface DetailDto {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  }
  type PageDto = DetailDto[];
}
