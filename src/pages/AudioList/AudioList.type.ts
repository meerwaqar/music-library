export type TrackType = {
  title: string;
  album: string;
  cover: string;
};
export interface AudioListProps {}
export type AudioListDataType = {
  tracks: Array<TrackType>;
};
