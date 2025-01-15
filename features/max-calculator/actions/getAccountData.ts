'use server';

export async function getEquipmentData(tag: string): Promise<HeroEquipment[]> {
  try {
    const formattedTag = tag.replace(/^#/, '%23');
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/${formattedTag}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLASH_API_TOKEN}`,
      },
    });
    if (!response.ok) throw new Error('Invalid tag');
    const data: Player = await response.json();
    return data.heroEquipment;
  } catch {
    throw new Error('Invalid tag');
  }
}
