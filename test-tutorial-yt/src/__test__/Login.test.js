import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Login, { validateEmail } from "../Login"
// buttonの数をテスト
describe('Login Comp test', () => {
	test("render 1 button", async () => {
		render(<Login />) // COM要素をテストする場合はrenderが必要(関数のみの場合は不要)
		const buttonList = await screen.findAllByRole("button")
		expect(buttonList).toHaveLength(1)
	})

	test("email validation", () => {
		const testEmail = "aaaaaaaa.com"
		expect(validateEmail(testEmail)).not.toBe(true)
	})

	test("email validation2", () => {
		const testEmail = "aaaaaaaa@gmail.com"
		expect(validateEmail(testEmail)).toBe(true)
	})

	test("password type", () => {
		render(<Login />)
		const pw = screen.getByPlaceholderText("パスワード入力")
		expect(pw).toHaveAttribute("type", "password")
	})

	// FormがSubmitできるかのテスト
	test("Form submit", () => {
		render(<Login />)
		// 要素取得
		const sm = screen.getByTestId("submit")
		const em = screen.getByPlaceholderText("メールアドレス入力")
		const pw = screen.getByPlaceholderText("パスワード入力")

		userEvent.type(em, 'aaaaa@gmail.com')
		userEvent.type(pw, 'p@ssw0rd')

		userEvent.click(sm)

		const userInfo = screen.getByText('aaaaa@gmail.com')
		expect(userInfo).toBeInTheDocument()
	})
})