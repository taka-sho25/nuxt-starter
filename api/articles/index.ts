import type { DefineMethods } from 'aspida';
import { mockMethods } from 'aspida-mock';
import dayjs from 'dayjs';

type Article = {
  id: number;
  image: string;
  title: string;
  created_at: string;
};

export type Methods = DefineMethods<{
  get: {
    query?: {
      per?: number;
      page?: number;
    };

    resBody: {
      articles: Article[];
    };
  };
}>;

const MockArticle = (id: number) => ({
  id,
  image: 'https://placehold.jp/350x250.png',
  title: `Article Sample -- ${id}`,
  created_at: `${dayjs().add(id, 'd').format('YYYY-MM-DD')}`,
});

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: {
      articles: new Array(20).fill(null).map((_, index) => {
        return MockArticle(index + 1);
      }),
    },
  }),
});
