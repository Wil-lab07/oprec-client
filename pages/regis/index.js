import Head from 'next/head'
import Link from 'next/link'
import {
  Box, 
  Text, 
  Flex, 
  FormControl, 
  FormLabel, 
  Stack, Image,
  FormErrorMessage, 
  FormHelperText,
  Input, InputGroup, InputLeftAddon, InputRightAddon,
  Select, Textarea, Button
} from '@chakra-ui/react'

import {useForm} from 'react-hook-form'
import {useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'

export default function Home() {   
  const { register, handleSubmit, formState:{errors} } = useForm()

  const [loading, setLoading] = useState(false)
  const [errorApi, setErrorApi] = useState(undefined)
  const [token, setToken] = useState(undefined)

  const onSubmit = async (data)=>{
    setLoading(true)
    try{
      const formData = new FormData()
      formData.append("nim_mhs", data.nim_mhs)
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("divisiID", 10) //ini diubah sesuai folder divisi (list)
      formData.append("no_hp", data.no_hp)
      formData.append("tempat_lahir", data.tempat_lahir)
      formData.append("tanggal_lahir", data.tanggal_lahir)
      formData.append("jenis_kelamin", data.jenis_kelamin)
      formData.append("alamat", data.alamat)
      formData.append("angkatan", data.angkatan)
      formData.append("prodi", data.prodi)
      formData.append("ips", data.ips)
      formData.append("line", data.line)
      formData.append("instagram", data.instagram)
      formData.append("transkrip_nilai", data.transkrip_nilai[0])
      formData.append("soal1", data.soal1)
      formData.append("soal2", data.soal2)
      formData.append("soal3", data.soal3)
      formData.append("portofolio", data.portofolio[0]) //sesuai kalau gk ada sama divisinya gk usah kasih
      
      const res = await axios.post('http://128.199.159.189/api/mhs/register', formData)
    
      setToken(res.data.token)

      Swal.fire(
        'Pendaftaran Berhasil',
        'Silahkan untuk menunggu pemberitahuan selanjutnya!',
        'success'
      )

      setLoading(false)
    }catch(err){
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      })
      setLoading(false)
      setErrorApi(err.response.data.message)
      console.log(err)
    }
  }

  const loadingTransition = {
    y:{
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut"
    }
  }

  return (
    <Flex
      height={'100vh'}
      width={'100%'}
      // bgGradient={'linear(to-tr, yellow.100, blue.300)'} 
      bgImage={['/phone.jpg', '/landscape.jpg', '/landscape.jpg', '/landscape.jpg']}
      bgPosition={['center', 'bottom', 'bottom']}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      justifyContent={'center'} 
      direction={'column'}
      alignItems={'center'}
    >
      {loading === true ? 
        <Flex
          borderRadius={'12px 12px 12px 12px'} 
          height={'80vh'} 
          width={['65%', '65%', '70%', '70%']}
          overflow={'auto'} 
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '12px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '12px',
              bgGradient: 'linear(to-tr, yellow.100, blue.300)',
            },
          }}
          p={6} direction={'column'} bgColor={'white'}
        >
          <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} height={'80vh'}>
            <motion.span 
              transition={loadingTransition} 
              animate={{
              y: ['10%', '-20%']
            }}
            >
            <Image
              src='/Logo_MXM.png'
              objectFit={'cover'}
              boxSize={'189px'}
              alt='Logo_MXM'
            />
            </motion.span>
          </Flex>
        </Flex>
        : loading === false && token !== undefined ?
        <Flex
          borderRadius={'12px 12px 12px 12px'} 
          height={'80vh'} 
          width={['65%', '65%', '70%', '70%']}
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '12px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '12px',
              bgGradient: 'linear(to-tr, yellow.100, blue.300)',
            },
          }}
          p={6} direction={'column'} bgColor={'white'} justifyContent={'center'} align={'center'}
        >
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Image
            src='/Logo_MXM.png'
            objectFit={'cover'}
            boxSize={'110px'}
            alt='Logo_MXM'
          />
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
          <Text textAlign={'center'} fontSize={['15px', '20px', '30px', '40px']} color={'red'}>Terimakasih Telah Mendaftar!</Text>
          <Text mt = {10} mb = {10} borderRadius={'20px'} bgGradient= 'linear(to-tr, orange.500, red.300)' p={5} textColor={'#FFFFFF'} fontSize={['30px', '30px', '60px' ,'60px']}>{token}</Text>
          <Text fontSize={['12px', '17px', '17px', '17px']} textColor={'black'} textAlign={'center'}>Silahkan screenshoot dan simpan token untuk melanjutkan sesi interview!</Text>
         </Flex>
        </Flex>
        : 
        <Flex
          borderRadius={'12px 12px 12px 12px'} 
          height={'80vh'} 
          width={['89%', '69%', '70%', '70%']}
          overflow={'auto'} 
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '12px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '12px',
              bgGradient: 'linear(to-tr, yellow.100, blue.300)',
            },
          }}
          p={6} direction={'column'} bgColor={'white'}
        >
          <Stack>
            <Flex 
              justifyContent={'center'}
              alignItems={'center'}
              direction={'column'}> 
              <Image 
                src='/Logo_MXM.png'
                objectFit={'cover'}
                boxSize={'110px'}
                alt='Logo_MXM'
              />
            </Flex>
            <form display={'flex'} flexDirection={'column'} onSubmit={handleSubmit(onSubmit)}>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='nim_mhs'>NIM</FormLabel>
                  <InputGroup>
                    <InputLeftAddon textColor={'white'} children='000000' bgColor={'gray.500'}/>
                    <Input {...register('nim_mhs', {required: "NIM harap diisi"})} type={'number'} name='nim_mhs' placeholder='32456' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  </InputGroup>
                  {errors.nim_mhs !== undefined && <Text textColor={'red'}>{errors.nim_mhs.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='name'>Nama Lengkap</FormLabel>
                  <Input {...register('name', {required: "Nama harap diisi!"})} type={'text'} name='name' placeholder='Agus Salim' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.name !== undefined && <Text textColor={'red'}>{errors.name.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='email'>Email Student</FormLabel>
                  <Input {...register('email', {required: "Email harap diisi"})} type={'email'} name='email' placeholder='agus.salim@student.umn.ac.id' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.email !== undefined && <Text textColor={'red'}>{errors.email.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='no_hp'>Nomor HP</FormLabel>
                  <InputGroup>
                    <InputLeftAddon textColor={'white'} children='+62' bgColor={'gray.500'}/>
                    <Input {...register('no_hp', {required: "NoHp harap diisi"})} type={'number'} name='no_hp' placeholder='847585947' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  </InputGroup>
                  {errors.no_hp !== undefined && <Text textColor={'red'}>{errors.no_hp.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='tempat_lahir'>Tempat Lahir</FormLabel>
                  <Input {...register('tempat_lahir', {required: "Tempat lahir harap diisi"})} type={'text'} name='tempat_lahir' placeholder='Pontianak' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.tempat_lahir !== undefined && <Text textColor={'red'}>{errors.tempat_lahir.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='tanggal_lahir'>Tanggal Lahir</FormLabel>
                  <Input {...register('tanggal_lahir', {required: "tanggal lahir harap diisi"})} type={'date'} name='tanggal_lahir' placeholder='Pontianak' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.tanggal_lahir !== undefined && <Text textColor={'red'}>{errors.tanggal_lahir.message}</Text>}  
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='jenis_kelamin'>Jenis Kelamin</FormLabel>
                  <Select name='jenis_kelamin' {...register('jenis_kelamin', {required: "Jenis kelamin harap dipilih"})} placeholder='Jenis Kelamin' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}>
                    <option value='Male'>L</option>
                    <option value='Female'>P</option>
                  </Select>
                  {errors.jenis_kelamin !== undefined && <Text textColor={'red'}>{errors.jenis_kelamin.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='alamat'>Alamat</FormLabel>
                  <Input {...register('alamat', {required: "alamat harap diisi"})} type={'text'} name='alamat' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.alamat !== undefined && <Text textColor={'red'}>{errors.alamat.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='angkatan'>Angkatan</FormLabel>
                  <Input {...register('angkatan', {required: "angkatan harap diisi"})} type={'number'} name='angkatan' placeholder='2019' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.angkatan !== undefined && <Text textColor={'red'}>{errors.angkatan.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='prodi'>Prodi</FormLabel>
                  <Select {...register('prodi', {required: "prodi harap diisi"})} name='prodi' placeholder='prodi' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}>
                    <option value='Informatika'>Informatika</option>
                    <option value='Sistem Informasi'>Sistem Informasi</option>
                    <option value='Sistem Komputer'>Sistem Komputer</option>
                    <option value='Teknik Fisika'>Teknik Fisika</option>
                    <option value='Teknik Elektro'>Teknik Elektro</option>
                    <option value='Manajemen'>Manajemen</option>
                    <option value='Akuntansi'>Akuntansi</option>
                    <option value='Ilkom'>Ilmu Komunikasi</option>
                    <option value='Jurnal'>Jurnalistik</option>
                    <option value='Arsi'>Arsitektur</option>
                    <option value='FTVA'>Film dan Animasi</option>
                    <option value='DKV'>DKV</option>
                    <option value='HTL'>Perhotelan</option>
                  </Select>
                  {errors.prodi !== undefined && <Text textColor={'red'}>{errors.prodi.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='ips'>Nilai Ips</FormLabel>
                  <Input {...register('ips', {required: "nilai ip harap diisi"})} type={'number'} step={'any'} name='ips' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.ips !== undefined && <Text textColor={'red'}>{errors.ips.message}</Text>}
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='line'>Line</FormLabel>
                  <Input {...register('line', {required: "line harap diisi"})} type={'text'} name='line' placeholder='agusline' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.line !== undefined && <Text textColor={'red'}>{errors.line.message}</Text>}      
                </Box>
                <Box width={'100%'} mr={2} ml={2} mt={[2, 2, 0, 0]}>
                  <FormLabel textColor={'black'} htmlFor='instagram'>Instagram</FormLabel>
                  <Input {...register('instagram', {required: "instagram harap diisi"})} type={'text'} name='instagram' placeholder='agusagus' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.instagram !== undefined && <Text textColor={'red'}>{errors.instagram.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='transkrip_nilai'>Screen shoot Transkrip Nilai</FormLabel>
                  <Input {...register('transkrip_nilai', {required: "transkrip nilai harap diupload"})} type={'file'} pt={1} name='transkrip_nilai' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  {errors.transkrip_nilai !== undefined && <Text textColor={'red'}>{errors.transkrip_nilai.message}</Text>}
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal1'>Menurut kamu apa arti "Neverland"?</FormLabel>
                  <Textarea {...register('soal1')} type={'text'} name='soal1' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal2'>Harapan kamu untuk MAXIMA 2022?</FormLabel>
                  <Textarea {...register('soal2')} type={'text'} name='soal2' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal3'>Jelaskan kombinasi frontend dan backend menurut pemahaman kamu!</FormLabel>
                  <Textarea {...register('soal3')} type={'text'} name='soal3' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} flexDirection={['column', 'column', 'row', 'row']}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='portofolio'>upload divisi</FormLabel>
                  <Input {...register('portofolio')} type={'file'} pt={1} name='portofolio' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex mt={5}>
                <Box mr={2} ml={2}>
                  <Button w={20} type="submit" textColor= 'black' bgColor={'green.200'} _hover={{bgColor: "yellow.200"}}>Submit</Button>
                </Box>
                <Box>
                  <Link href='/daftar'><Button w={20} textColor= 'white' bgColor={'gray.500'} _hover={{bgColor: "Black"}}>Back</Button></Link>
                </Box>
              </Flex>
            </form>
          </Stack>
        </Flex>
      }
    </Flex>
  )
}
