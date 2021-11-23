import { DefaultRequestBody, rest } from 'msw'
import { MessageMetadata } from '../types'

export const handlers = [

    rest.get<DefaultRequestBody, string[]>('/folders',
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    "Inbox",
                    "Trash",
                    "Work Emails",
                    "Mailing Lists",
                    "Sent",
                    "Spam",
                    "Drafts",
                    "Personal"
                ])
            )
        }
    ),

    rest.get<DefaultRequestBody, MessageMetadata[]>('/folders/Inbox',
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "message-id": "123abc",
                        "from": "Jane Doe",
                        "subject": "Re: Postgres Meetup Thursday"
                    },
                    {
                        "message-id": "456def",
                        "from": "Richard Roe",
                        "subject": "Lunch Next Week"
                    },
                    {
                        "message-id": "789aaa",
                        "from": "Alan Turing",
                        "subject": "Emacs Release Update"
                    },
                    {
                        "message-id": "098ddd",
                        "from": "Grace Hopper",
                        "subject": "New Compiler Version Available"
                    }
                ])
            )
        }
    ),


    rest.get<DefaultRequestBody, MessageMetadata[]>('/folders/Trash',
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "message-id": "999999",
                        "from": "Acme Corp",
                        "subject": "Package delivered Thursday"
                    },
                    {
                        "message-id": "88888888",
                        "from": "Richard Roe",
                        "subject": "Re: Project looks good"
                    }
                ])
            )
        }
    ),

]