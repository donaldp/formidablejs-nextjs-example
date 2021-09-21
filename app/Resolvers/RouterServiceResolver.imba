import { AuthService as Auth, ServiceResolver, Route } from '@formidablejs/framework'

export default class RouterServiceResolver < ServiceResolver

	def boot
		Route.group { middleware: 'jwt' }, do
			Auth.routes!

			Route.group { prefix: '/api' }, do
				require '../../routes/api'

			require '../../routes/web'

		self
