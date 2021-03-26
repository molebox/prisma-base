import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        // {
        //     emit: 'stdout',
        //     level: 'error',
        // },
        // {
        //     emit: 'stdout',
        //     level: 'info',
        // },
        // {
        //     emit: 'stdout',
        //     level: 'warn',
        // },
    ],
})

interface FormData {
    name: string;
    email?: string;
}

async function main() {

    // const whereNameIs = Prisma.validator<Prisma.UserCreateInput>()({
    //     email: 'rich'
    // })

    // function specificUser(name: string, email: string) {
    //     return Prisma.validator<Prisma.SelectAndInclude>()({
    //         select: {
    //             name: 'Rich'
    //         },
    //         include: {
    //             email: true
    //         }
    //     })
    // }

    // const createUserAndPost = Prisma.validator<Prisma.UserCreateInput>()({
    //     name: 'Gary',
    //     email: 'gary@boop.com',
    //     posts: {
    //         create: {
    //             title: 'Hello Worldb yay'
    //         }
    //     },
    //     profile: {
    //         create: {
    //             bio: 'BANG'
    //         }
    //     }
    // })


    // const userProfileAndPosts = Prisma.validator<Prisma.UserInclude>()({
    //     posts: true,
    //     profile: true
    // })

    // function select() {
    //     return Prisma.validator<Prisma.UserWhereInput>()({
    //         include: specificUser('boop1', 'boop')
    //     })
    // }

    //await prisma.user.create({ data: createUserAndPost })

    //const oneUser = await prisma.user.findUnique({ where: specificUser('Rich', 'rich@boop.com') })
    //const allUsers = await prisma.user.findMany({ include: userProfileAndPosts })
    //console.log({ oneUser })
    //console.dir(allUsers, { depth: null })

    // const formData: FormData = {
    //     name: 'Emelie'
    // }

    // const users = await prisma.user.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 email: {
    //                     contains: formData.email
    //                 }
    //             }
    //         ]
    //     }
    // })

    // const allUsers = await prisma.user.findMany()

    // console.dir(users, { depth: null })

    // prisma.$on('query', e => {
    //     console.log("Query: " + e.query)
    //     console.log("Duration: " + e.duration + "ms")
    // })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
