export interface Camp {
  camps: [
    {
      id: number;
      camp: string;
      class: string;
      status: '모집전' | '모집중' | '모집완료';
      program: string;
      thumbnails: string;
      startDate: string;
      limitCount: number;
    },
  ];
}

export interface Community {
  community: [
    {
      id: number;
      popularity: string;
      category: string;
      title: string;
      desc: string;
      users: [
        {
          id: number;
          userid: string;
          comment: string;
        },
      ];
    },
  ];
}
