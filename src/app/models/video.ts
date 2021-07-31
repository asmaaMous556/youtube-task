
export interface video{  
            id: string,
            snippet: {
                publishedAt: Date,
                channelId: string,
                title: string,
                description: string,
            }
               
                contentDetails: {
                    duration: string,
                },
                statistics: {
                    viewCount: number,
                    likeCount: number,
                    dislikeCount: number,
                    favoriteCount: number,
                    commentCount: number
                }


            }