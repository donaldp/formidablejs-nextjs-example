import { helpers } from '@formidablejs/framework'

export tag LayoutComponent
	<self>
		<body style="margin: 0">
			<div style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
				<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6">
					<tr>
						<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;"> "&nbsp;"
						<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px">
							<div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px">
								<div style="clear: both; text-align: center; width: 100%;">
									<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
										<slot name='header'>

								<table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
									<tr>
										<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
											<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
												<tr>
													<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
														<slot>

								<div style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
									<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
										<slot name='footer'>

										<tr>
											<td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 2px; font-size: 12px; color: #999999; text-align: center;">
												<p> "&copy; {new Date!.getFullYear!} {helpers.config('app.name')}. All rights reserved."
