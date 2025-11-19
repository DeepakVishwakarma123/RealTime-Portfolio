export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

      <img
        src="https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="Profile"
        className="rounded-xl shadow-xl mb-4"
      />

      <p>
        This is your Profile Page. You can show user information, activity,
        achievements, and any relevant details that belong to the logged-in
        user or visitor.
      </p>
    </div>
  );
}
