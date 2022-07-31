import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../'

describe('Pagination', () => {
//   test('currentIndexとindexが一致した時に、"◀︎ now"が表示される1', () => {
//     // Componentをレンダリング
//     render(<Pagination max={5} />);
//     // Componentにアクセス
//     screen.debug();
//   })

  test('currentIndexとindexが一致した時に、"◀︎ now"が表示される2', () => {
	render(<Pagination max={5} />);
	screen.queryByText(/1/);
	expect(screen.queryByText(/1/)).toHaveTextContent(/◀︎ now/);
	expect(screen.queryByText(/2/)).not.toHaveTextContent(/◀︎ now/);
  });

  test('currentIndexとindexが一致した時に、"◀︎ now"が表示される3', () => {
    // 対象Componentのレンダリング
    render(<Pagination max={5} />);

    // ユーザーの操作
    fireEvent.click(screen.queryByText(/next/));
  });
})
