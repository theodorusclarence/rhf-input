import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

const pageList = [
  { label: 'Using Yup as schema validator', route: '/yup' },
  { label: 'Collection of inputs', route: '/inputs' },
  { label: 'Multi Step Form', route: 'https://clarence.link/stepform' },
];

export default function Home() {
  return (
    <>
      <Seo />

      <main>
        <section className=''>
          <div className='py-16 text-center layout'>
            <h1>React Hook Form Default Inputs</h1>
            <CustomLink
              className='mt-2 text-gray-700'
              href='https://github.com/theodorusclarence/rhf-input'
            >
              See the repository
            </CustomLink>

            <div className='max-w-lg mx-auto mt-5 text-left'>
              <h3>List</h3>
              <ul className='mt-2 space-y-2'>
                {pageList.map(({ label, route }) => (
                  <li key={route}>
                    <CustomLink href={route} className='text-gray-800'>
                      {label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <footer className='absolute w-full text-center text-gray-700 bottom-2'>
          © {new Date().getFullYear()} By{' '}
          <CustomLink href='https://theodorusclarence.com?ref=nextstarter'>
            Theodorus Clarence
          </CustomLink>{' '}
          &{' '}
          <CustomLink href='https://github.com/rizqitsani'>
            Muhammad Rizqi Tsani
          </CustomLink>
        </footer>
      </main>
    </>
  );
}
