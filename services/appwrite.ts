import { Client, ID, Query, TablesDB } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new TablesDB(client);

export const updateSearchCount = async (query: string, movie: Movie) => {

    try {    
        const results = await database.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [
                Query.equal('searchTerm', query)
            ]
        });
        // check if a record of that search has already been stored
        if(results.rows.length > 0) {
            const existingMovie = results.rows[0];
            
            await database.updateRow(
                DATABASE_ID,
                TABLE_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        }else {
            await database.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: {
                    searchTerm: query,
                    movie_id: movie.id,
                    count: 1,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            })
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
  // if a document is found increment the serachCount field
  // if no document is found c
    // create a new document id Appwrite database -> 1
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const results = await database.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [
                Query.limit(5),
                Query.orderDesc('count')
            ]
        });

        return results.rows as unknown as TrendingMovie[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}