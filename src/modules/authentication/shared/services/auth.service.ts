import supabase from "@/shared/supabase/supabase";

const login = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw Error(error.message);

    return data;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export { login };
