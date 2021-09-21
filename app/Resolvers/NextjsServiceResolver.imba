import { ServiceResolver } from '@formidablejs/framework'

export default class NextjsServiceResolver < ServiceResolver

	def boot
		self.app.register(require('fastify-nextjs'), {
			dev: self.app.config.get('app.debug')
			dir: './resources/js'
		})

		self
