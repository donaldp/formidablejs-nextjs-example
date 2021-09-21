import { Route } from '@formidablejs/framework'

Route.get('hello', do(request) request.translate 'index.hello', 'Hello World')
	.name('hello')
	.middleware(['lang'])

