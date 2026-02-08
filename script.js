// Supabase client setup
const SUPABASE_URL = "https://vnxzbjzcalhkxxafjslg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZueHpianpjYWxoa3h4YWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NzYwNDksImV4cCI6MjA4NjE1MjA0OX0.2yjkFEno9UuBKjO6peF6ZyT5dcGx8VmFz9FkHr4h1Fo";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sign Up function
async function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    showMessage(error.message, "red");
  } else {
    showMessage("Sign Up Successful! Check your email.", "green");
  }
}

// Login function
async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    showMessage(error.message, "red");
  } else {
    showMessage("Login Successful! Welcome.", "green");
  }
}

// Function to show messages
function showMessage(msg, color) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = msg;
  messageDiv.style.color = color;
}
