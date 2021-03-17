import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    function specificUser(name: string, email: string) {
        return Prisma.validator<Prisma.UserWhereInput>()({
            name,
            email
        })
    }

    const createUserAndPost = Prisma.validator<Prisma.UserCreateInput>()({
        name: 'Emelie',
        email: 'ems@boop.com',
        posts: {
            create: {
                title: 'Hello World'
            }
        },
        profile: {
            create: {
                bio: 'Is a nurse'
            }
        }
    })


    const userProfileAndPosts = Prisma.validator<Prisma.UserInclude>()({
        posts: true,
        profile: true
    })

    await prisma.user.create({ data: createUserAndPost })

    const oneUser = await prisma.user.findUnique({ where: specificUser('Rich', 'rich@boop.com') })
    const allUsers = await prisma.user.findMany({ include: userProfileAndPosts })
    console.log({ oneUser })
    console.dir(allUsers, { depth: null })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })