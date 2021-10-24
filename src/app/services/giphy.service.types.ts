export interface GiphyAPIResponse {
  data: GiphyAPIData[];
  pagination: Pagination;
  meta: Meta;
}

export interface GiphyAPIData {
  id: string;
  username: string;
  title: string;
  images: GiphyImages;
}

export interface GiphyImages {
  fixed_height: FixedHeight;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
