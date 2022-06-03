export default interface Camp {
  id: number;
  camp: string;
  class: string;
  status: '모집전' | '모집중' | '모집완료';
  thumbnails: string;
  startDate: string;
  limitCount: number;
}
