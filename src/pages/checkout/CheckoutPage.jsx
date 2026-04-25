import Header from '../../components/layout/Header';
import CheckoutForm from '../../components/checkout/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      <Header currentPage="checkout" />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;