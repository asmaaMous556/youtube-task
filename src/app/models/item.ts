export interface item {


  id: string,
  snippet: {
    localized: {
      description: string,
      title: string
    },

    channelTitle: string,
    publishedAt: string,
    channelId: string,
    description: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number
      }
    }
  }



}
