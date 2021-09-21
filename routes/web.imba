import { FastifyReply, Route } from '@formidablejs/framework'

Route.get '/', do(request, reply\FastifyReply)
	reply.nextRender('/index')
