// --> /api/users
export async function GET(request){
    const users = {data: 'JSON data taken from DB'}
    return new Response(JSON.stringify(users))
}